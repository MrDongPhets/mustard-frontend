import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CHATBOT_CATEGORIES, findBestMatch } from '../data/chatbotFaqs.js';
import '../styles/chat-widget.css';

const GREETING = "Hi! I'm the MUSTARD Digitals assistant. Pick a topic below, or type your own question.";
const NO_MATCH = "I couldn't find an exact match for that. Try one of these topics, or reach out directly:";

let nextId = 1;
const uid = () => nextId++;

function categoryChips() {
  return CHATBOT_CATEGORIES.map(c => ({
    id: c.id,
    label: c.label,
    icon: c.icon,
    onClick: (nav, setSt) => handleCategoryClick(c, setSt),
  }));
}

function handleCategoryClick(category, setState) {
  setState(prev => ([
    ...prev,
    { id: uid(), from: 'user', text: category.label },
    {
      id: uid(),
      from: 'bot',
      text: `Here are common questions about ${category.label.toLowerCase()}:`,
      quickReplies: category.questions.map((q, i) => ({
        id: `${category.id}-${i}`,
        label: q.q,
        onClick: (nav, setSt) => handleQuestionClick(category, q, setSt),
      })).concat([{ id: `${category.id}-back`, label: '⬅ Back to topics', muted: true, onClick: (nav, setSt) => handleBackToTopics(setSt) }]),
    },
  ]));
}

function handleQuestionClick(category, question, setState) {
  const replies = [];
  if (question.extraReply) {
    replies.push({
      id: 'extra-' + category.id,
      label: question.extraReply.label,
      onClick: (nav, setSt, setOpenFn) => { if (setOpenFn) setOpenFn(false); nav(question.extraReply.path); },
    });
  }
  replies.push(
    { id: 'more-' + category.id, label: `More ${category.label} questions`, onClick: (nav, setSt) => handleCategoryClick(category, setSt) },
    { id: 'back', label: '⬅ Back to topics', muted: true, onClick: (nav, setSt) => handleBackToTopics(setSt) },
  );

  setState(prev => ([
    ...prev,
    { id: uid(), from: 'user', text: question.q },
    { id: uid(), from: 'bot', text: question.a, quickReplies: replies },
  ]));
}

function handleBackToTopics(setState) {
  setState(prev => ([
    ...prev,
    {
      id: uid(),
      from: 'bot',
      text: 'What else can I help with?',
      quickReplies: categoryChips(),
    },
  ]));
}

function handleAsk(rawText, setState) {
  const text = rawText.trim();
  if (!text) return;

  const match = findBestMatch(text);

  setState(prev => {
    const next = [...prev, { id: uid(), from: 'user', text }];
    if (match) {
      const replies = [];
      if (match.item.extraReply) {
        replies.push({
          id: 'extra-' + match.category.id,
          label: match.item.extraReply.label,
          onClick: (nav, setSt, setOpenFn) => { if (setOpenFn) setOpenFn(false); nav(match.item.extraReply.path); },
        });
      }
      replies.push(
        { id: 'more-' + match.category.id, label: `More ${match.category.label} questions`, onClick: (nav, setSt) => handleCategoryClick(match.category, setSt) },
        { id: 'back', label: '⬅ Back to topics', muted: true, onClick: (nav, setSt) => handleBackToTopics(setSt) },
      );
      next.push({ id: uid(), from: 'bot', text: match.item.a, quickReplies: replies });
    } else {
      next.push({ id: uid(), from: 'bot', text: NO_MATCH, quickReplies: categoryChips() });
    }
    return next;
  });
}

export default function ChatWidget() {
  const navigate = useNavigate();
  const bodyRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(() => ([
    { id: uid(), from: 'bot', text: GREETING, quickReplies: categoryChips() },
  ]));

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open]);

  function handleContactClick() {
    setOpen(false);
    navigate('/contact');
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAsk(input, setMessages);
    setInput('');
  }

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel">
          <div className="chat-panel-header">
            <div className="chat-panel-title">
              <span className="chat-panel-dot" />
              MUSTARD Assistant
            </div>
            <button className="chat-panel-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="chat-panel-body" ref={bodyRef}>
            {messages.map(m => (
              <div key={m.id} className="chat-turn">
                <div className={`chat-bubble chat-bubble-${m.from}`}>
                  {m.text.split('\n').map((line, j) => <p key={j}>{line}</p>)}
                </div>
                {m.quickReplies && (
                  <div className="chat-quick-replies">
                    {m.quickReplies.map(qr => (
                      <button
                        key={qr.id}
                        className={`chat-chip${qr.muted ? ' chat-chip-muted' : ''}`}
                        onClick={() => qr.onClick(navigate, setMessages, setOpen)}
                      >
                        {qr.icon && <i className={`fas ${qr.icon}`}></i>} {qr.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <form className="chat-panel-input" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question..."
              aria-label="Type your question"
            />
            <button type="submit" aria-label="Send" disabled={!input.trim()}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>

          <div className="chat-panel-footer">
            Didn&apos;t find your answer?{' '}
            <button className="chat-contact-link" onClick={handleContactClick}>Contact us →</button>
          </div>
        </div>
      )}

      <button
        className={`chat-toggle${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-comment-dots'}`}></i>
      </button>
    </div>
  );
}
