export const trimUsername = (username: string) => {
    const beforeAt = /[^@]+/
    return username.match(beforeAt)
}
