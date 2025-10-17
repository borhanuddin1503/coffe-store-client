# Coffee Store API ☕️

A simple **Coffee Store backend API** built with **Node.js, Express, and MongoDB**.  
This API allows CRUD operations for **coffees** and **users** with proper database connection using MongoDB Atlas.

---
## 🛠 Technologies Used

- Node.js  
- Express.js  
- MongoDB (Atlas)  
- dotenv (for environment variables)  
- CORS  
- ObjectId (MongoDB)  

---

### **Coffee Endpoints**
- `GET /coffes` → Get all coffees  
- `GET /coffes/:id` → Get a coffee by ID  
- `POST /coffes` → Add a new coffee  
- `PUT /coffes/:id` → Update a coffee  
- `DELETE /coffes/:id` → Delete a coffee  

### **User Endpoints**
- `GET /users` → Get all users  
- `POST /users` → Add a new user  
- `DELETE /users/:id` → Delete a user  

---

## 📦 Dependencies

- express  
- mongodb  
- dotenv  
- cors  

---

## 🚀 How to Run Locally

1. Clone the repository:
```bash git clone https://github.com/borhanuddin1503/coffe-store-client.git ```
2. cd coffee-store-server
3. npm install
4. Create a .env file with the following variables:
    COFFE_USER= coffe-store-DB
    COFFE_PASS= P6r5XrpvM1PabDiN
    PORT=3000
---
## 🔗 API Usage Example
#### Get all coffees:
GET http://localhost:3000/coffes
#### Add a coffee:
POST http://localhost:3000/coffes
Body: { "name": "Espresso", "price": 5, "description": "Strong coffee" }
#### Delete a coffee:
DELETE http://localhost:3000/coffes/:id
  
