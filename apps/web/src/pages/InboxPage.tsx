import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Layout,
  Typography,
  Input,
  Tabs,
  Row,
  Col,
  Card,
  Statistic,
  List,
  Avatar,
  Tag,
  Button,
  Badge,
  Empty,
  Space,
} from "antd";
import {
  SearchOutlined,
  StarOutlined,
  StarFilled,
  MailOutlined,
} from "@ant-design/icons";
import { useAuthStore } from "@features/auth/store/authStore";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

type FilterType = "All" | "Unread" | "Starred" | "Archived";
type TagType = "Design" | "Work" | "Personal";

interface Message {
  id: string;
  sender: string;
  initials: string;
  preview: string;
  tag: TagType;
  time: string;
  isUnread: boolean;
  isStarred: boolean;
  archived: boolean;
}

const TAG_COLORS: Record<TagType, { color: string; bg: string }> = {
  Work: { bg: "rgba(212,104,122,0.14)", color: "#D4687A" },
  Personal: { bg: "rgba(155,107,117,0.16)", color: "#9B6B75" },
  Design: { bg: "rgba(242,167,181,0.30)", color: "#B14C61" },
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    sender: "Alex Kim",
    initials: "AK",
    preview:
      "Hey! I loved your Cloudlyme portfolio, the pink palette is just dreamy.",
    tag: "Design",
    time: "2m ago",
    isUnread: true,
    isStarred: true,
    archived: false,
  },
  {
    id: "2",
    sender: "Sarah Chen",
    initials: "SC",
    preview:
      "Can we schedule a call to discuss the project timeline this week?",
    tag: "Work",
    time: "1h ago",
    isUnread: true,
    isStarred: false,
    archived: false,
  },
  {
    id: "3",
    sender: "Minh Tran",
    initials: "MT",
    preview: "Just wanted to say your website design is absolutely gorgeous.",
    tag: "Personal",
    time: "3h ago",
    isUnread: false,
    isStarred: true,
    archived: false,
  },
  {
    id: "4",
    sender: "Jordan Lee",
    initials: "JL",
    preview:
      "I have a freelance opportunity that might interest you — let's chat.",
    tag: "Work",
    time: "Yesterday",
    isUnread: false,
    isStarred: false,
    archived: false,
  },
  {
    id: "5",
    sender: "Emma Wilson",
    initials: "EW",
    preview: "Your Blossom UI Kit was featured in our newsletter this month!",
    tag: "Design",
    time: "2 days ago",
    isUnread: false,
    isStarred: true,
    archived: false,
  },
  {
    id: "6",
    sender: "David Park",
    initials: "DP",
    preview:
      "Thanks for connecting! I'd love to collaborate on something soon.",
    tag: "Personal",
    time: "3 days ago",
    isUnread: false,
    isStarred: false,
    archived: false,
  },
];

export function InboxPage() {
  const { user, isAuthenticated, clearAuth } = useAuthStore();
  const navigate = useNavigate();

  const [filter, setFilter] = useState<FilterType>("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(6);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const cloudLayerRef = useRef<HTMLDivElement>(null);
  const cloudsSpawned = useRef(false);

  useEffect(() => {
    if (!isAuthenticated) navigate("/login", { replace: true });
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (!isAuthenticated || cloudsSpawned.current) return;
    const layer = cloudLayerRef.current;
    if (!layer) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    cloudsSpawned.current = true;
    const spawnCloud = (
      topVh: number,
      scale: number,
      dur: number,
      delay: number,
      opacity: number,
    ) => {
      const c = document.createElement("div");
      c.style.cssText = `position:absolute;top:${topVh}vh;left:0;width:${260 * scale}px;height:${110 * scale}px;opacity:${opacity};filter:blur(2px);animation:cloudDrift ${dur}s linear ${delay}s infinite;will-change:transform;`;
      c.innerHTML = `<svg viewBox="0 0 260 110" width="100%" height="100%"><g fill="#F2A7B5"><ellipse cx="80" cy="70" rx="70" ry="40"/><ellipse cx="150" cy="55" rx="60" ry="50"/><ellipse cx="200" cy="75" rx="55" ry="34"/><ellipse cx="120" cy="80" rx="80" ry="30"/></g></svg>`;
      layer.appendChild(c);
    };
    spawnCloud(14, 1.1, 70, 0, 0.07);
    spawnCloud(46, 0.85, 90, -30, 0.06);
    spawnCloud(72, 1.25, 100, -55, 0.07);
  }, [isAuthenticated]);

  const signOut = () => {
    clearAuth();
    navigate("/login", { replace: true });
  };

  const toggleRead = (id: string) =>
    setMessages((ms) =>
      ms.map((m) => (m.id === id ? { ...m, isUnread: false } : m)),
    );
  const toggleStar = (id: string) =>
    setMessages((ms) =>
      ms.map((m) => (m.id === id ? { ...m, isStarred: !m.isStarred } : m)),
    );

  const live = messages.filter((m) => !m.archived);
  const totalCount = live.length;
  const unreadCount = live.filter((m) => m.isUnread).length;
  const starredCount = live.filter((m) => m.isStarred).length;

  const filtered = messages.filter((m) => {
    if (filter === "Unread" && !m.isUnread) return false;
    if (filter === "Starred" && !m.isStarred) return false;
    if (filter === "Archived" && !m.archived) return false;
    if (filter !== "Archived" && m.archived) return false;
    const q = query.trim().toLowerCase();
    if (
      q &&
      !(
        m.sender.toLowerCase().includes(q) ||
        m.preview.toLowerCase().includes(q)
      )
    )
      return false;
    return true;
  });
  const shown = filtered.slice(0, visible);

  const userInitial = (user?.name || user?.email || "?")
    .trim()
    .charAt(0)
    .toUpperCase();

  const tabItems = (
    ["All", "Unread", "Starred", "Archived"] as FilterType[]
  ).map((key) => ({
    key,
    label:
      key === "Unread" ? (
        <Badge count={unreadCount} size="small" offset={[6, 0]} color="#D4687A">
          {key}
        </Badge>
      ) : (
        key
      ),
  }));

  if (!isAuthenticated) return null;

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "#FFF8FA",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cloud layer */}
      <div
        ref={cloudLayerRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      />

      {/* Nav */}
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(24px,6vw,80px)",
          height: 70,
          backdropFilter: "blur(14px)",
          background: "rgba(255,248,250,0.72)",
          borderBottom: "1px solid rgba(242,167,181,0.25)",
          boxShadow: "none",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "0.42em",
            color: "#3D1A22",
            paddingLeft: "0.42em",
            textDecoration: "none",
          }}
        >
          CLOUDLYME
        </Link>
        <Space
          size="large"
          align="center"
          style={{ fontSize: 14, letterSpacing: "0.08em" }}
        >
          <Link to="/#about" style={{ color: "#9B6B75" }}>
            About
          </Link>
          <Link to="/#work" style={{ color: "#9B6B75" }}>
            Work
          </Link>
          <Text strong style={{ color: "#D4687A" }}>
            Inbox
          </Text>
          <Button
            onClick={signOut}
            icon={
              <Avatar
                size={22}
                style={{
                  background: "linear-gradient(135deg,#F2A7B5,#D4687A)",
                  fontSize: 10,
                  fontWeight: 600,
                  lineHeight: "22px",
                }}
              >
                {userInitial}
              </Avatar>
            }
            style={{
              borderRadius: 50,
              borderColor: "rgba(242,167,181,0.55)",
              color: "#9B6B75",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            Sign out
          </Button>
        </Space>
      </Header>

      <Content
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 920,
          margin: "0 auto",
          padding: "clamp(36px,6vw,64px) clamp(20px,5vw,40px) 100px",
          width: "100%",
        }}
      >
        {/* Page header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 20,
            marginBottom: 30,
            flexWrap: "wrap",
          }}
        >
          <Space align="baseline" size={18} wrap>
            <Title
              level={1}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "clamp(44px,7vw,72px)",
                lineHeight: 0.9,
                margin: 0,
                color: "#3D1A22",
              }}
            >
              Inbox
            </Title>
            <Tag
              style={{
                borderRadius: 50,
                background: "#D4687A",
                color: "#FFF8FA",
                border: "none",
                fontSize: 13,
                fontWeight: 600,
                padding: "5px 14px",
                boxShadow: "0 4px 14px -4px rgba(212,104,122,0.7)",
              }}
              icon={
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#FFF8FA",
                    display: "inline-block",
                    marginRight: 6,
                  }}
                />
              }
            >
              {unreadCount} unread
            </Tag>
          </Space>
          <Text style={{ color: "#9B6B75", fontSize: 15 }}>
            Your messages and notifications
          </Text>
        </div>

        {/* Search */}
        <Input
          prefix={<SearchOutlined style={{ color: "#9B6B75" }} />}
          placeholder="Search messages..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVisible(6);
          }}
          style={{
            borderRadius: 50,
            padding: "12px 22px 12px 12px",
            fontSize: 15,
            marginBottom: 18,
            boxShadow: "0 4px 20px rgba(242,167,181,0.15)",
            borderColor: "rgba(242,167,181,0.55)",
            background: "rgba(255,255,255,0.7)",
          }}
        />

        {/* Filter tabs */}
        <Tabs
          activeKey={filter}
          onChange={(key) => {
            setFilter(key as FilterType);
            setVisible(6);
          }}
          items={tabItems}
          style={{ marginBottom: 30 }}
        />

        {/* Stats */}
        <Row gutter={16} style={{ marginBottom: 34 }}>
          {[
            {
              label: "Total Messages",
              value: totalCount,
              accent: false,
              icon: <MailOutlined style={{ color: "#D4687A", fontSize: 17 }} />,
            },
            {
              label: "Unread",
              value: unreadCount,
              accent: true,
              icon: (
                <Badge
                  dot
                  color="#D4687A"
                  style={{ boxShadow: "0 0 0 4px rgba(212,104,122,0.18)" }}
                />
              ),
            },
            {
              label: "Starred",
              value: starredCount,
              accent: false,
              icon: <StarFilled style={{ color: "#F2A7B5", fontSize: 17 }} />,
            },
          ].map(({ label, value, accent, icon }) => (
            <Col xs={24} sm={8} key={label}>
              <Card
                style={{
                  borderRadius: 20,
                  background: accent
                    ? "linear-gradient(135deg,rgba(253,232,238,0.9),rgba(249,198,206,0.55))"
                    : "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.7)",
                  boxShadow: "0 4px 20px rgba(242,167,181,0.15)",
                  transition: "transform .3s ease, box-shadow .3s ease",
                  marginBottom: 16,
                }}
                styles={{ body: { padding: "22px 24px" } }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-4px) scale(1.02)";
                  el.style.boxShadow =
                    "0 16px 34px -14px rgba(242,167,181,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "";
                  el.style.boxShadow = "0 4px 20px rgba(242,167,181,0.15)";
                }}
              >
                <Statistic
                  title={
                    <Space
                      size={8}
                      style={{
                        color: accent ? "#D4687A" : "#9B6B75",
                        fontSize: 13,
                        letterSpacing: "0.04em",
                        fontWeight: accent ? 600 : 400,
                      }}
                    >
                      {icon}
                      {label}
                    </Space>
                  }
                  value={value}
                  valueStyle={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 42,
                    fontWeight: 600,
                    color: accent ? "#D4687A" : "#3D1A22",
                    lineHeight: 1,
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>

        {/* Message list */}
        <List
          dataSource={shown}
          locale={{
            emptyText: (
              <Empty
                image={<div style={{ fontSize: 46 }}>🌸</div>}
                imageStyle={{ height: 56 }}
                description={
                  <>
                    <Title
                      level={4}
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                        color: "#3D1A22",
                        margin: "0 0 4px",
                      }}
                    >
                      No messages here
                    </Title>
                    <Text style={{ color: "#9B6B75", fontSize: 14 }}>
                      {query
                        ? "Try a different search term."
                        : "Nothing in this view yet."}
                    </Text>
                  </>
                }
              />
            ),
          }}
          renderItem={(m) => {
            const tc = TAG_COLORS[m.tag];
            const baseBg = m.isUnread ? "#FDE8EE" : "#FFFFFF";
            const baseEdge = m.isUnread ? "#D4687A" : "transparent";
            return (
              <List.Item
                key={m.id}
                onClick={() => toggleRead(m.id)}
                actions={[
                  <Text
                    key="time"
                    style={{
                      fontSize: 12.5,
                      color: "#9B6B75",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {m.time}
                  </Text>,
                  <Button
                    key="star"
                    type="text"
                    shape="circle"
                    icon={
                      m.isStarred ? (
                        <StarFilled
                          style={{ color: "#D4687A", fontSize: 18 }}
                        />
                      ) : (
                        <StarOutlined
                          style={{ color: "#9B6B75", fontSize: 18 }}
                        />
                      )
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStar(m.id);
                    }}
                    title={m.isStarred ? "Unstar" : "Star"}
                  />,
                ]}
                style={{
                  cursor: "pointer",
                  padding: "14px 18px",
                  borderRadius: 18,
                  background: baseBg,
                  borderLeft: `3px solid ${baseEdge}`,
                  marginBottom: 10,
                  boxShadow: "0 4px 20px rgba(242,167,181,0.15)",
                  transition:
                    "transform .25s ease, box-shadow .25s ease, background .25s ease",
                  animation: "fadeUp .5s cubic-bezier(.2,.7,.2,1) both",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-1px)";
                  el.style.boxShadow = "0 4px 16px rgba(242,167,181,0.22)";
                  if (!m.isUnread) {
                    el.style.background = "#FFF0F3";
                    el.style.borderLeftColor = "#F2A7B5";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "";
                  el.style.boxShadow = "0 4px 20px rgba(242,167,181,0.15)";
                  el.style.background = baseBg;
                  el.style.borderLeftColor = baseEdge;
                }}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar
                      size={46}
                      style={{
                        background: "linear-gradient(135deg,#F2A7B5,#D4687A)",
                        fontWeight: 600,
                        fontSize: 15,
                        flexShrink: 0,
                        boxShadow: "0 4px 12px -4px rgba(212,104,122,0.6)",
                      }}
                    >
                      {m.initials}
                    </Avatar>
                  }
                  title={
                    <Space size={8} wrap style={{ lineHeight: 1.3 }}>
                      <Text
                        strong={m.isUnread}
                        style={{
                          fontSize: 15,
                          color: "#3D1A22",
                          fontWeight: m.isUnread ? 700 : 500,
                        }}
                      >
                        {m.sender}
                      </Text>
                      <Tag
                        style={{
                          borderRadius: 50,
                          background: tc.bg,
                          color: tc.color,
                          border: "none",
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "2px 10px",
                        }}
                      >
                        {m.tag}
                      </Tag>
                      {m.isUnread && <Badge dot color="#D4687A" />}
                    </Space>
                  }
                  description={
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#9B6B75",
                        fontWeight: m.isUnread ? 500 : 400,
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: "42ch",
                      }}
                    >
                      {m.preview}
                    </Text>
                  }
                />
              </List.Item>
            );
          }}
        />

        {/* Load more */}
        {filtered.length > visible && (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 38 }}
          >
            <Button
              onClick={() => setVisible((v) => v + 6)}
              style={{
                borderRadius: 50,
                borderColor: "#F2A7B5",
                color: "#D4687A",
                padding: "12px 32px",
                height: "auto",
                fontSize: 15,
                letterSpacing: "0.03em",
                transition:
                  "background .3s ease, color .3s ease, transform .3s ease, box-shadow .3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "#F2A7B5";
                el.style.color = "#FFF8FA";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 12px 26px -10px rgba(212,104,122,0.6)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "transparent";
                el.style.color = "#D4687A";
                el.style.transform = "";
                el.style.boxShadow = "none";
              }}
            >
              Load more messages
            </Button>
          </div>
        )}
      </Content>
    </Layout>
  );
}
