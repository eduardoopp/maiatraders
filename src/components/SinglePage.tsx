const SinglePage = () => {
    return (
        <div className="flex flex-col items-center h-screen text-white">

            <h1 className="text-center max-w-[40%] text-2xl font-bold">DESCUBRA UMA NOVA FONTE DE RENDA ATRAVÉS DO <span className="text-red-600"> MERCADO FINANCEIRO</span></h1>

            <div>
                <img src="/carlinhos.jpg" alt="money" className="w-60 h-75 rounded-3xl mt-5" />
            </div>
            <div className="flex gap-2 mt-5">
                <p>
                    Comunidade no TELEGRAM
                </p>
                <img src="/telegram.png" className="w-5 h-5" />
            </div>

            <button className="mt-5 bg-red-600 hover:bg-red-700 cursor-pointer font-bold py-5 px-15 rounded-2xl text-2xl">
                <a target="_blank" href="https://t.me/carlinhosmaiatrader" rel="noopener noreferrer">
                    CLIQUE AQUI PARA ACESSAR
                </a>
            </button>

            <p className="text-xl mt-7 text-center max-w-[40%]">
                <span className="text-red-600"> Clique no botão </span>
                acima e entre no grupo gratuito do
                <span className="text-red-600"> Telegram</span>
            </p>

            <div className="mt-7 flex flex-col gap-2">

                <div className="flex gap-2">
                    <img src="/trophy.png" className="w-5 h-5" />
                    <p>Operanções 100% AO VIVO</p>
                </div>


                <div className="flex gap-2">
                    <img src="/coin.png" className="w-5 h-5" />
                    <p>Estratégias Validades</p>
                </div>


                <div className="flex gap-2">
                    <img src="/whatsapp.png" className="w-5 h-5" />
                    <p> Suporte Dedicado</p>
                </div>

            </div>
        </div>
    );
}

export default SinglePage;