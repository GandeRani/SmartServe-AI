# 🍽️ SmartServe AI 🤖

# AI-Powered Restaurant Intelligence Platform
## 🌐 Live Demo

https://smartserve-ai-app.vercel.app/

SmartServe AI is a next-generation **AI-powered restaurant management platform** that combines artificial intelligence, automation, analytics, and modern full-stack technologies to transform traditional restaurant operations.

The platform enables restaurants to manage customer ordering, kitchen workflows, inventory, analytics, and AI-driven business decisions through a unified intelligent system.

> 🚀 Building an intelligent operating system for modern restaurants.
---

# 🌟 Problem Statement

Traditional restaurant systems face multiple challenges:

- Manual order processing
- Inefficient kitchen coordination
- Inventory wastage
- Lack of customer personalization
- Limited business insights
- Difficulty predicting future demand

SmartServe AI addresses these challenges through:

✅ Smart digital ordering  
✅ Kitchen automation  
✅ Inventory intelligence  
✅ AI recommendations  
✅ Sales prediction  
✅ Demand forecasting  
✅ Real-time analytics dashboards  

---

# 🚀 Key Features

## 👤 Smart Customer Ordering

Customers can:

- Browse digital food menu
- View categories and items
- Add items to cart
- Manage orders
- Place food orders
- Track order progress

---

# 👨‍🍳 Kitchen Automation Dashboard

SmartServe AI improves kitchen efficiency with automated workflows.

Features:

- Real-time order management
- Order status tracking
- Preparation workflow
- Faster kitchen operations
- Reduced manual coordination

---

# 📦 Smart Inventory Management

The inventory system helps restaurants efficiently manage resources.

Features:

- Inventory tracking
- Stock monitoring
- Database-powered inventory management
- Stock availability monitoring
- Future-ready AI optimization

---

# 📊 Analytics Dashboard

The analytics module provides business intelligence.

Features:

- Order analytics
- Sales insights
- Restaurant performance monitoring
- Data visualization
- Decision-support dashboards

---

# 🤖 AI Intelligence Layer

SmartServe AI includes an AI-powered intelligence layer to help restaurants make smarter decisions.

Implemented AI capabilities:

✅ AI Food Recommendation  
✅ AI Restaurant Assistant  
✅ Sales Prediction  
✅ Demand Forecasting  
✅ Business Insights Generation  

---

# 🍔 AI Food Recommendation System

The recommendation engine analyzes customer preferences and suggests suitable food items.

Example:

```
Customer Preference:

Vegetarian + Spicy

AI Recommendation:

🔥 Paneer Tikka
🌶️ Schezwan Noodles
🍛 Veg Biryani
```

Benefits:

- Personalized customer experience
- Increased engagement
- Improved sales opportunities

---

# 📈 Sales Prediction

SmartServe AI predicts future sales trends using restaurant data.

Example:

```
Tomorrow Forecast:

🍔 Burgers      ↑ 35%
🍕 Pizza        ↑ 22%
🥤 Drinks       ↑ 18%


AI Recommendation:

Increase burger ingredient stock.
Prepare additional inventory.
```

Benefits:

- Better planning
- Reduced shortage
- Improved revenue management

---

# 🔮 Demand Forecasting

The demand forecasting system helps restaurants understand future requirements.

Predictions include:

- Popular food items
- Peak ordering hours
- Customer demand trends
- Inventory requirements

---

# 🤖 AI Restaurant Assistant

An intelligent assistant helps restaurant owners understand business operations.

Example:

```
User:

Which food should we promote today?


AI:

Based on previous orders:

1. Pizza
2. Burger
3. Cold Coffee

Recommendation:

Create combo offers during evening hours.
```

---

# 🏗️ System Architecture

```
                         👤 Customers
                              |
                              |
                              ▼

                  🌐 Next.js Frontend
             React + TypeScript + Tailwind CSS

                              |
                              |
        ------------------------------------------------
        |                    |                         |
        ▼                    ▼                         ▼

   Menu System        Order Management        Dashboard


                              |
                              ▼

                    Backend API Layer


                              |
                              ▼

                 Prisma ORM + PostgreSQL


                              |
                              ▼

                    🤖 AI Intelligence Layer

       Recommendation | Prediction | Forecasting
```

---

# 🛠️ Technology Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

## Backend

- Next.js API Routes
- REST API Architecture

## Database

- PostgreSQL
- Prisma ORM

## AI & Analytics

- Machine Learning Models
- Recommendation Systems
- Predictive Analytics
- Data-driven Insights

## Development Tools

- Git
- GitHub
- VS Code
- npm

---

# 📂 Project Structure

```
SmartServe-AI/

│
├── app/
│   ├── dashboard/
│   ├── menu/
│   ├── kitchen/
│   ├── api/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── CartContext.tsx
│   └── UI Components
│
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
│
├── public/
│   ├── images/
│   │   ├── Burger.png
│   │   ├── Pizza.png
│   │   ├── Pasta.png
│   │   ├── French fries.png
│   │   ├── Cold coffee.png
│   │   └── Chocolate cake.png
│   │
│   └── screenshots/
│       ├── home.png
│       ├── menu.png
│       ├── kitchen.png
│       ├── admin.png
│       ├── analytics.png
│       └── assistant.png
│
├── package.json
├── package-lock.json
├── next.config.ts
├── eslint.config.mjs
├── tailwind.config.js
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
└── README.md
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/GandeRani/SmartServe-AI.git
```

Navigate into project:

```bash
cd SmartServe-AI
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Setup

Create `.env` file:

```env
DATABASE_URL="your_postgresql_database_url"
```

---

## Database Setup

Generate Prisma client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Seed database:

```bash
npx prisma db seed
```

---

## Run Application

Start development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 📸 Application Screenshots

## 🏠 Home Page

![Home](public/screenshots/home.png)

---

## 🍔 Menu System

![Menu](public/screenshots/menu.png)

---

## 👨‍🍳 Kitchen Dashboard

![Kitchen](public/screenshots/kitchen.png)

---

## 📊 Analytics Dashboard

![Analytics](public/screenshots/analytics.png)

---

## 🤖 AI Assistant

![Assistant](public/screenshots/assistant.png)

---

# 📌 Current Project Status

| Module | Status |
|---|---|
| Next.js Application | ✅ Completed |
| Responsive UI | ✅ Completed |
| Home Page | ✅ Completed |
| Menu System | ✅ Completed |
| Cart System | ✅ Completed |
| Order Tracking | ✅ Completed |
| Kitchen Dashboard | ✅ Completed |
| Admin Dashboard | ✅ Completed |
| PostgreSQL Database | ✅ Completed |
| Prisma ORM | ✅ Completed |
| Inventory Module | ✅ Completed |
| Analytics Dashboard | ✅ Completed |
| AI Assistant | ✅ Completed |
| AI Recommendation Engine | ✅ Completed |
| Sales Prediction | ✅ Completed |
| Demand Forecasting | ✅ Completed |

---

# 🏆 Hackathon Innovation

SmartServe AI combines three major technologies:

## 🤖 Artificial Intelligence

- Smart recommendations
- Predictive analytics
- Business intelligence

## ⚙️ Automation

- Kitchen workflow automation
- Digital ordering
- Inventory management

## 💻 Modern Software Engineering

- Full-stack architecture
- Database integration
- Scalable design

---

# 🎯 Impact

## Customers

✅ Faster ordering  
✅ Personalized recommendations  
✅ Better experience  

## Restaurant Staff

✅ Reduced manual work  
✅ Faster kitchen operations  
✅ Improved workflow  

## Restaurant Owners

✅ Better decisions  
✅ Reduced food waste  
✅ Increased efficiency  

---
# 🔑 Demo Credentials

For testing and evaluation, use the following demo accounts.

---

## 👨‍💼 Admin Account
Email:
admin@smartserve.ai

Password:
admin123
---

# 🚀 Deployment

The application can be deployed using:

Frontend:

- Vercel

Database:

- PostgreSQL Cloud Provider

Production build:

```bash
npm run build
```

Start production server:

```bash
npm start
```

---


# 🌐 Repository

GitHub:

https://github.com/GandeRani/SmartServe-AI

---

# 👨‍💻 Author

## Gande Rani

AI & Software Engineering Enthusiast

GitHub:

https://github.com/GandeRani

---

