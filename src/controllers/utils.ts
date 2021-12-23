export function generarPrimos(n: any) {
    if(n >= 2) {
        let primos = []
        let hayPrimo = []

        for(let i = 1; i <= n + 1; ++i){
            hayPrimo.push(true)
        }

        for(let i = 2; i <= n; ++i){
            if (hayPrimo[i]) {
                primos.push(i)

                for (let j = 1; j * i <= n; ++j) {
                    hayPrimo[i * j] = false
                }
            }
        }

        return primos.sort((a, b) => b - a)
    }
}