export default async function handler(req, res) {

    const { searchTerm } = req.body

    const placeholder = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await placeholder.json();

    const filteredUsers = users.filter(user => user.name?.includes(searchTerm) || user.username?.includes(searchTerm))

    res.status(200).json(filteredUsers)
  }