# Perplexity AI Clone 🔍🤖

A fully-functional AI-powered search platform that replicates Perplexity AI's core features. Built with Next.js 15, featuring real-time AI responses, Google Search integration, user authentication, and a modern responsive interface.

## ✨ Live Demo

🌐 **[Visit Live App](https://perplexiity-clone.vercel.app/)**

## 🚀 Key Features

### 🔍 **AI-Powered Search**

- **Google Custom Search API** integration for real search results
- **Gemini AI 1.5-Flash** for intelligent response generation
- **Real-time processing** with adaptive polling system
- **8 search results** per query with rich metadata

### 🎨 **Modern Interface**

- **Responsive design** with mobile-first approach
- **Dynamic navigation** with active page highlighting
- **Card-based layouts** with consistent sizing (450px height)
- **Image fallbacks** using Lucide icons (Newspaper, ImageOff)
- **Loading states** and skeleton screens

### 👤 **User Management**

- **Clerk Authentication** with sign-up/sign-in flows
- **Protected routes** and user sessions
- **User profile** integration in header
- **Personalized search history**

### 📊 **Advanced Search Results**

- **Multi-tab interface**: Answer, Images, Sources
- **AI-generated summaries** with markdown rendering
- **Source attribution** with clickable links
- **Image gallery** with proper aspect ratios
- **Share functionality** with URL copying

### ⚡ **Performance & UX**

- **Background processing** with Inngest job queue
- **Optimized builds** (largest page: 39.6kB)
- **Static page generation** for fast loading
- **Error handling** and retry mechanisms
- **Clean success messages** (no disruptive alerts)

## 🛠️ Tech Stack

### **Frontend**

- **Next.js 15.4.4** - React framework with App Router
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **Lucide React** - Modern icon library
- **React Markdown** - Markdown rendering

### **Backend & Database**

- **Supabase** - PostgreSQL database with real-time features
- **Clerk** - Authentication and user management
- **Inngest** - Background job processing
- **Vercel** - Serverless deployment platform

### **APIs & Services**

- **Google Custom Search API** - Web search results
- **Gemini AI 1.5-Flash** - AI response generation
- **Axios** - HTTP client with interceptors

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ and npm
- Google Custom Search API key
- Gemini AI API key
- Supabase account
- Clerk account

### 1. Clone the Repository

```bash
git clone https://github.com/karan0838/perplexity-ai-clone.git
cd perplexity-ai-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Search API
GOOGLE_API_KEY=your_google_api_key
GOOGLE_CX=your_custom_search_engine_id

# Gemini AI
GOOGLE_AI_API_KEY=your_gemini_api_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

### 4. Database Setup

Set up your Supabase database with these tables:

- `Library` - Stores search sessions
- `Chats` - Stores individual search queries and AI responses

### 5. Development Setup

```bash
# Start the development server
npm run dev

# In another terminal, start Inngest dev server
npm run inngest:dev
```

### 6. Production Build

```bash
npm run build
npm start
```

## 🏗️ Architecture

### **Search Flow**

1. User enters search query
2. Google Custom Search API returns results
3. Results saved to Supabase database
4. Inngest job queues AI response generation
5. Gemini AI processes results and generates summary
6. UI updates with AI response via polling

### **Component Structure**

```
app/
├── (auth)/                    # Authentication pages
│   ├── sign-in/[[...sign-in]]/
│   └── sign-up/[[...sign-up]]/
├── (routes)/
│   ├── discover/              # News discovery page
│   ├── library/               # Search history
│   └── search/[libId]/        # Search results page
├── _components/
│   ├── AppSidebar.jsx         # Main navigation
│   └── ChatInputBox.jsx       # Search input
├── api/
│   ├── google-search-api/     # Search API endpoint
│   ├── llm-model/             # AI processing trigger
│   └── inngest/               # Background job handler
└── provider.jsx               # Context providers
```

## 🎯 Features Breakdown

### **Search Results Page**

- **Answer Tab**: AI-generated summaries with markdown support
- **Images Tab**: Visual results with fallback icons
- **Sources Tab**: Clickable source links with favicons
- **Fixed search input**: Always accessible at bottom
- **Share functionality**: Copy URL to clipboard

### **Navigation System**

- **Active page highlighting**: Bold text for current page
- **Responsive sidebar**: Mobile-friendly navigation
- **Logo integration**: Proper aspect ratios
- **Clerk user button**: Profile management

### **Error Handling**

- **API timeouts**: 10-second request limits
- **Retry mechanisms**: Adaptive polling with backoff
- **Graceful failures**: User-friendly error messages
- **Loading states**: Skeleton screens during processing

## 📊 Performance Metrics

### **Build Analysis**

- **Total pages**: 11 (4 static, 7 dynamic)
- **Largest page**: 39.6kB (search results)
- **Build time**: ~31 seconds
- **First Load JS**: 99.8kB shared bundle

### **Optimization Features**

- **Static generation** for home, discover, and library pages
- **Code splitting** for optimal loading
- **Image optimization** with Next.js Image component
- **Bundle analysis** with tree shaking

## 🔧 API Endpoints

| Endpoint                  | Method | Description                        |
| ------------------------- | ------ | ---------------------------------- |
| `/api/google-search-api`  | POST   | Fetches search results from Google |
| `/api/llm-model`          | POST   | Triggers AI response generation    |
| `/api/inngest`            | POST   | Handles background job processing  |
| `/api/get-inngest-status` | POST   | Checks AI job completion status    |

## 🎨 UI Components

### **Custom Components**

- `AppSidebar` - Main navigation with responsive design
- `ChatInputBox` - Search input with send functionality
- `AnswerDisplay` - AI response rendering with markdown
- `DisplayResult` - Search results with tabbed interface
- `Header` - User info and share functionality
- `NewsCard` - Consistent card layout for discover page

### **shadcn/ui Integration**

- Button, Input, Tabs, Tooltip
- Dropdown Menu, Sheet, Sidebar
- Skeleton loading states

## 🚦 Current Status

### ✅ **Completed Features**

- [x] Google Search API integration (8 results)
- [x] Gemini AI response generation
- [x] User authentication with Clerk
- [x] Responsive UI with consistent design
- [x] Background job processing with Inngest
- [x] Image fallbacks and error handling
- [x] Share functionality with URL copying
- [x] Navigation highlighting and mobile support

### 🎯 **Future Enhancements**

- [ ] Dark/light theme toggle
- [ ] Advanced search filters
- [ ] Conversation threading
- [ ] Export search results
- [ ] Voice search input
- [ ] Search analytics dashboard

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### **Development Guidelines**

- Follow Next.js 15 best practices
- Use TypeScript for new features
- Maintain responsive design principles
- Add proper error handling
- Include loading states for UX

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Perplexity AI](https://perplexity.ai) - Original inspiration
- [Next.js](https://nextjs.org) - React framework
- [Vercel](https://vercel.com) - Deployment platform
- [Supabase](https://supabase.com) - Database and backend
- [Clerk](https://clerk.com) - Authentication solution
- [Google](https://developers.google.com) - Search and AI APIs
- [shadcn/ui](https://ui.shadcn.com) - UI component library
- [Tailwind CSS](https://tailwindcss.com) - Styling framework

## 📞 Contact 

- **Developer**: [Deepak singh]

**Made with ❤️ by Deepak singh| Star ⭐ this repo if you found it helpful!**
