# 🤖 AI Code Reviewer

> _Supercharge your pull requests with intelligent AI-powered code reviews_

**AI Code Reviewer** is a cutting-edge NestJS application that transforms your development workflow by delivering instant, insightful code reviews. When Bitbucket webhooks trigger our `/api/v1/bitbucket/reviews` endpoint, our AI springs into action, automatically analyzing your code and posting thoughtful review comments directly to your pull requests.

---

## ✨ **What Makes This Special**

🎯 **Intelligent Reviews** • AI-powered analysis that understands your code  
🔗 **Seamless Integration** • Native Bitbucket webhook support  
⚡ **Instant Feedback** • Automatic comment posting on pull requests  
🚀 **Production Ready** • Built with NestJS for enterprise-grade reliability

---

## 🛠️ **Getting Started**

### **Prerequisites**

Before diving in, make sure you have these tools ready:

| Tool                              | Version  | Purpose                    |
| --------------------------------- | -------- | -------------------------- |
| [Node.js](https://nodejs.org/)    | `v16+`   | Runtime environment        |
| [npm](https://www.npmjs.com/)     | `v8+`    | Package management         |
| [Docker](https://www.docker.com/) | `latest` | SonarQube setup (optional) |

---

### **🚀 Quick Installation**

**1.** Clone and navigate to the project:

```bash
git clone <repository-url>
cd <repository-folder>
```

**2.** Install all dependencies:

```bash
npm install
```

**3.** Configure your environment by creating a `.env` file:

```env
# Application Configuration
PORT=3000
NODE_ENV=develop

# API Credentials
API_TOKEN=<your_api_token>
GROQ_API_KEY=<your_groq_api_key>
```

> 💡 **Pro Tip:** Replace the placeholder values with your actual API credentials

---

## 🎮 **Running the Application**

### **Development Mode**

```bash
npm run start:dev
```

_Perfect for active development with hot reloading_

### **Production Mode**

```bash
# Build the project
npm run build

# Start in production mode
npm run start:prod
```

_Optimized for performance and stability_

---

## 🧪 **Testing Suite**

We believe in quality code, so we've included comprehensive testing:

```bash
# Unit tests
npm run test

# End-to-end tests
npm run test:e2e

# Coverage reports
npm run test:cov
```

---

## 🚀 **Deployment**

Ready to go live? Follow these simple steps:

**1.** Build your production bundle:

```bash
npm run build
```

**2.** Deploy the generated `dist` folder to your preferred hosting platform

---

## 📊 **Code Quality with SonarQube** _(Optional)_

Elevate your code quality with integrated SonarQube analysis:

**1.** Launch SonarQube using Docker:

```bash
docker-compose up -d
```

**2.** Access the dashboard at **http://localhost:9000**

**3.** Configure your project using the `projectKey` from `.scannerwork/report-task.txt`

---

## 📖 **API Documentation**

Explore our comprehensive API documentation with Swagger UI:

🌐 **Live Documentation:** `http://localhost:3000/api/v1/docs`

_Interactive API explorer with real-time testing capabilities_

---

## 🤝 **Contributing**

We love contributions! Here's how to get involved:

**1.** 🍴 Fork the repository  
**2.** 🌿 Create your feature branch  
**3.** 💫 Commit your amazing changes  
**4.** 🚀 Push to your branch  
**5.** 📬 Submit a pull request

---

## 📄 **License**

This project is licensed under the **MIT License** - feel free to use it however you'd like!

---

## 💬 **Get in Touch**

Questions? Ideas? Just want to chat about code?

**👨‍💻 Author:** Armando Isai Hernandez Ibarra

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

_Built with ❤️ using NestJS and AI magic_

</div>
