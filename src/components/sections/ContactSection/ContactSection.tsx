import { Space, Button, Form, Input } from 'antd'
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import type { FC } from 'react'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import styles from './ContactSection.module.css'

const ContactSection: FC = () => {
  const { ref, isVisible } = useScrollAnimation()
  const [sent, setSent] = useState(false)

  return (
    <section
      id="contact"
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      aria-labelledby="contact-heading"
    >
      <div className={styles.watermark} aria-hidden="true">cloudlyme</div>

      <div className={styles.inner}>
        <span className={styles.eyebrow}>Say hello</span>

        <h2 id="contact-heading" className={styles.heading}>
          Let's make something <em>lovely</em>.
        </h2>

        <p className={styles.sub}>
          Have a project, a question, or just want to say hi? My inbox is always open.
        </p>

        <Form
          layout="vertical"
          onFinish={() => setSent(true)}
          className={styles.form}
          aria-label="Contact form"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Your name" className={styles.input} aria-label="Your name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
          >
            <Input placeholder="Your email" className={styles.input} aria-label="Your email" />
          </Form.Item>

          <Form.Item
            name="message"
            rules={[{ required: true, message: 'Please enter a message' }]}
          >
            <Input.TextArea
              placeholder="Your message"
              rows={4}
              className={styles.input}
              aria-label="Your message"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              className={styles.submitBtn}
            >
              {sent ? 'Thank you — sent ♡' : 'Send message'}
            </Button>
          </Form.Item>
        </Form>

        <Space size={26} wrap className={styles.socials}>
          <Button type="link" icon={<InstagramOutlined />} href="#" className={styles.socialBtn}>
            Instagram
          </Button>
          <Button type="link" icon={<GithubOutlined />} href="#" className={styles.socialBtn}>
            GitHub
          </Button>
          <Button type="link" icon={<LinkedinOutlined />} href="#" className={styles.socialBtn}>
            LinkedIn
          </Button>
          <Button
            type="link"
            icon={<MailOutlined />}
            href="mailto:hello@cloudlyme.com"
            className={styles.socialBtn}
          >
            Email
          </Button>
        </Space>
      </div>
    </section>
  )
}

export default ContactSection
