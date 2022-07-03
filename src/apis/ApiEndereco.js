const apiBase = "https://projeto-doceria-li2jvfi4ma-rj.a.run.app/api/"


const ApiEndereco = {

    cadastra:async(registro) => {

        let result = await fetch(apiBase+"registerEnd",{
            method: 'POST',
            body:JSON.stringify(registro),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })

        result = await result.json()  
        return result;

    }
}
export default ApiEndereco;