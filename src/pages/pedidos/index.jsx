import Header from "../../components/header";
import Pedido from "../../components/pedido";

function Pedidos(){

    const pedidos = [
        {
            id_pedido: 52456,
            dt_pedido: "25/03/2022 00:05:00",
            status: "F",
            nome: "Osmar trojilio",
            endereco: "Av Riachuelo 1144",
            itens:[
                {id_item: 1, url_foto:"https://jornada-dev2.s3.amazonaws.com/xsalada.jpg", nome:"X-Salada", qtd: 1},
                {id_item: 1, url_foto:"https://jornada-dev2.s3.amazonaws.com/xsalada.jpg", nome:"X-Tudo", qtd: 1}
            ]
        },
        {
            id_pedido: 52412,
            dt_pedido: "25/03/2022 00:21:00",
            status: "F",
            nome: "Claúdio trugilio",
            endereco: "Av paraná 112",
            itens:[
                {id_item: 1, url_foto:"https://jornada-dev2.s3.amazonaws.com/xsalada.jpg", nome:"X-Salada", qtd: 1},
                {id_item: 1, url_foto:"https://jornada-dev2.s3.amazonaws.com/xsalada.jpg", nome:"X-Tudo", qtd: 1}
            ]
        },
        {
            id_pedido: 52455,
            dt_pedido: "25/03/2022 00:29:00",
            status: "F",
            nome: "Osmar trojilio junior",
            endereco: "Av Riachuelo 1144A",
            itens:[
                {id_item: 1, url_foto:"https://jornada-dev2.s3.amazonaws.com/xsalada.jpg", nome:"X-Salada", qtd: 1},
                {id_item: 1, url_foto:"https://jornada-dev2.s3.amazonaws.com/xsalada.jpg", nome:"X-Tudo", qtd: 1}
            ]
        }];


    return <>
    <Header />
    <div className="container-fluid">

        <div className="m-2 mt-4 d-flex justify-content-between">
        <h2>Pedidos na fila</h2>
        <button className="btn btn-lg btn-primary">Atualizar</button>

        </div>

        <div className="m-2 mt-4">
            {
                pedidos.map((item) => {
                   return <Pedido key={item.id_pedido}
                                  id_pedido={item.id_pedido} 
                                  dt_pedido={item.dt_pedido}
                                  status={item.status}
                                  nome={item.nome}
                                  endereco={item.endereco}
                                  itens={item.itens}
                                  />
                })
            }
            
        </div>

    

    </div>
    
    </>
}

export default Pedidos;