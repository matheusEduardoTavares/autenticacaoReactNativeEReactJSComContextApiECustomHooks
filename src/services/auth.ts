export function signIn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'amfkamfakmfkamfm kamfkmafmamfka',
                user: {
                    name: 'Diego',
                    email: 'diego@rocketseat.com.br'
                }
            })
        }, 2000)
    })
}