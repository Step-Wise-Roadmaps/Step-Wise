module.exports = (req, res, next) => {
    if (user.role === "admin") {
        next();
    } else {
        return res.status(403).json({ message: "Access denied: Admins only" });
    }
}