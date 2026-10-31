import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Globe2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form] = Form.useForm();
  const [sending, setSending] = useState(false);

  const onFinish = async (values) => {
    setSending(true);

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // Check that EmailJS credentials are configured.
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EMAILJS_NOT_CONFIGURED");
      }

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,

            // These names must match your EmailJS template variables.
            template_params: {
              from_name: values.name.trim(),
              from_email: values.email.trim(),
              reply_to: values.email.trim(),
              message: values.message.trim(),
            },
          }),
        }
      );

      if (!response.ok) {
        const errorDetails = await response.text();

        console.error("EmailJS error:", errorDetails);

        throw new Error("EMAIL_SEND_FAILED");
      }

      message.success(
        "Message sent successfully! Thanks for reaching out."
      );

      form.resetFields();
    } catch (error) {
      console.error("Contact form submission failed:", error);

      if (error.message === "EMAILJS_NOT_CONFIGURED") {
        message.error(
          "The contact form is not configured yet. Please email me directly."
        );
      } else {
        message.error(
          "Couldn't send your message. Please try again or email me directly."
        );
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <span className="eyebrow">
              Have a good one in mind?
            </span>

            <h2 className="section-title">
              Let’s make
              <br />
              <em>something matter.</em>
            </h2>

            <p className="section-description">
              Have an interesting problem, an idea to explore, or
              an opportunity to discuss? I’d love to hear from you.
            </p>

            <a
              className="contact-email"
              href="mailto:gaurpadshukla@gmail.com"
            >
              <Mail size={18} />
              gaurpadshukla@gmail.com
              <ArrowUpRight size={16} />
            </a>

            <div className="contact-details">
              <span>
                <MapPin size={15} />
                Lucknow, India
              </span>

              <span>
                <CheckCircle2 size={15} />
                Open to interesting challenges
              </span>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/GPS2001"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={17} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Globe2 size={17} />
                LinkedIn
              </a>
            </div>
          </div>

          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-heading">
              <span className="mono">
                01 / START A CONVERSATION
              </span>

              <p>
                Tell me a little about what you’re thinking.
              </p>
            </div>

            <Form
              form={form}
              layout="vertical"
              requiredMark={false}
              onFinish={onFinish}
            >
              <Form.Item
                label="Your name"
                name="name"
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: "Please enter your name.",
                  },
                  {
                    max: 100,
                    message: "Your name must be under 100 characters.",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Jane Smith"
                  autoComplete="name"
                  maxLength={100}
                  disabled={sending}
                />
              </Form.Item>

              <Form.Item
                label="Email address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address.",
                  },
                  {
                    type: "email",
                    message: "Enter a valid email address.",
                  },
                  {
                    max: 254,
                    message: "Please enter a shorter email address.",
                  },
                ]}
              >
                <Input
                  size="large"
                  type="email"
                  placeholder="jane@company.com"
                  autoComplete="email"
                  maxLength={254}
                  disabled={sending}
                />
              </Form.Item>

              <Form.Item
                label="What’s on your mind?"
                name="message"
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: "Please add a short message.",
                  },
                  {
                    max: 5000,
                    message: "Your message must be under 5000 characters.",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="A project, an idea, a question..."
                  maxLength={5000}
                  showCount
                  disabled={sending}
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                loading={sending}
                disabled={sending}
              >
                {sending ? "Sending..." : "Send message"}
                {!sending && <Send size={16} />}
              </Button>

              <p className="form-note">
                Your message will be sent to my email through
                our configured email service. Your email address
                will be included so I can reply to you.
              </p>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}