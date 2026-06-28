import { Space, Button, Form, Input, Typography } from 'antd'
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import type { FC } from 'react'
import { useScrollAnimation } from '@cloudlyme/hooks'
import styles from './ContactSection.module.css'

const { Title, Text, Paragraph } = Typography

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
        <Text className={styles.eyebrow}>Say hello</Text>

        <Title level={2} id="contact-heading" className={styles.heading}>
          Let's make something <em>lovely</em>.
        </Title>

        <Paragraph className={styles.sub}>
          Have a project, a question, or just want to say hi? My inbox is always open.
        </Paragraph>

        <Form
          layout="vertical"
          onFinish={() => setSent(true)}
          className={styles.form}
          aria-label="Contact form"
          requiredMark={false}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Your name" className={styles.input} aria-label="Your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
          >
            <Input placeholder="Your email" className={styles.input} aria-label="Your email" />
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
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
