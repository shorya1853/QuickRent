// /users
//   - user1
//     - products
//       - product1
//         - productDetails
//           - name: "Product 1"
//           - description: "Description of Product 1"
//         - chats
//           - chat1
//             - messages
//               - message1
//                 - sender: "user1"
//                 - content: "Hello, how can I help you with Product 1?"
//                 - date: timestamp
//               - message2
//                 - sender: "user2"
//                 - content: "I have a question about the specifications."
//                 - date: timestamp
//       - product2
//         - productDetails
//           - name: "Product 2"
//           - description: "Description of Product 2"
//         - chats
//           - chat3
//             - messages
//               - message3
//                 - sender: "user1"
//                 - content: "Sure, what would you like to know about Product 2?"
//                 - date: timestamp
//               - message4
//                 - sender: "user3"
//                 - content: "I'm interested in buying Product 2. Can we discuss the price?"
//                 - date: timestamp
//   - user2
//     - products
//       - ...
//   ...
// /products
//   - product1
//     - productName: "Product 1"
//     - productDescription: "Description of Product 1"
//     - ownerId: "user1"
//   - product2
//     - productName: "Product 2"
//     - productDescription: "Description of Product 2"
//     - ownerId: "user1"