// import NextAuth from 'next-auth';
// import CredentialsProvider from "next-auth/providers/credentials";
// export default NextAuth({
//     providers: [
//         CredentialsProvider({
//             type: "credentials"
//         }),
//     ],
//     credentials: {
//
//     },
//     // Настройки сессий и другие параметры
//     session: {
//         jwt: true,
//     },
//     callbacks: {
//         async jwt(token, user) {
//             // Сохранение пользовательских данных в токен сессии
//             if (user) {
//                 token.id = user.id;
//             }
//             return token;
//         },
//         async session(session, token) {
//             // Добавление пользовательских данных в объект сессии
//             session.user = token;
//             return session;
//         },
//     },
// });
