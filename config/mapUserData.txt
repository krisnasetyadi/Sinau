export const mapUserData = (user) => {
    const { email, id } = user
    return {
        email,
        id,
    }
}