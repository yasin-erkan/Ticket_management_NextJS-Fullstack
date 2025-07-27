# Ticket Management System

A modern, full-stack ticket management application built with Next.js 15, TypeScript, and MongoDB. Perfect for IT support teams, help desks, or any organization that needs to track and manage support tickets efficiently.

## 🎬 Demo

![Ticket Management System Demo](https://github.com/yasin-erkan/Ticket_management_NextJS-Fullstack/blob/main/src/assets/ticketManagement.gif)

## 🚀 Features

### Core Functionality
- **Dashboard**: Overview of ticket statistics with interactive charts
- **Ticket Management**: Create, read, update, and delete tickets
- **Smart Categorization**: Software Issue, Hardware Issue, Connection Issue, Other
- **Priority System**: 5-level priority ranking (1-5)
- **Progress Tracking**: Visual progress indicators (0-100%)
- **Status Management**: In Progress, On Hold, Done

### Analytics & Reporting
- **Real-time Statistics**: Ticket distribution by category and status
- **Interactive Charts**: Powered by Chart.js for data visualization
- **Performance Metrics**: Track resolution times and team efficiency

### User Experience
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Intuitive Navigation**: Sidebar navigation with Lucide React icons
- **Mobile Friendly**: Responsive design that works on all devices
- **Real-time Updates**: Instant page revalidation after ticket changes

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: MongoDB with Mongoose ODM
- **Charts**: Chart.js with React Chart.js 2
- **Icons**: Lucide React
- **Development**: Turbopack for fast development

## 📋 Prerequisites

- Node.js 18+ 
- MongoDB database (local or cloud)
- npm, yarn, pnpm, or bun

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ticket_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```bash
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 API Endpoints

- `GET /api/tickets` - Retrieve all tickets
- `POST /api/tickets` - Create new ticket
- `GET /api/statistics` - Get ticket statistics for dashboard

## 🗂️ Project Structure

```
src/
├── app/
│   ├── (pages)/           # Page routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/
│   ├── card/              # Ticket card components
│   ├── charts/            # Chart components
│   ├── form/              # Form components
│   ├── header/            # Header component
│   ├── sidebar/           # Navigation sidebar
│   └── footer/            # Footer component
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions and actions
```

## 🎯 Usage

### Creating a Ticket
1. Navigate to "New Ticket" in the sidebar
2. Fill in the required fields:
   - Title (max 100 characters)
   - Description (max 500 characters)
   - Category selection
   - Priority level (1-5)
   - Progress percentage (0-100)
   - Status (In Progress, On Hold, Done)
3. Submit the form

### Managing Tickets
- View all tickets in the "Tickets" section
- Click on any ticket to edit
- Track progress with visual indicators
- Filter and sort by category, priority, or status

### Dashboard Analytics
- View ticket distribution charts
- Monitor team performance metrics
- Track resolution trends over time

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add your `MONGODB_URI` environment variable
3. Deploy with one click

### Docker
```bash
# Build the image
docker build -t ticket-app .

# Run the container
docker run -p 3000:3000 -e MONGODB_URI=your_connection_string ticket-app
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🐛 Issues & Support

If you encounter any issues or need support, please create an issue in the GitHub repository.
