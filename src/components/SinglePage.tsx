const SinglePage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen text-white px-4 py-8">

            <h1 className="text-center max-w-[90%] md:max-w-[40%] text-2xl md:text-4xl font-bold">
                DESCUBRA UMA NOVA FONTE DE RENDA ATRAVÉS DO
                <span className="text-red-600"> MERCADO FINANCEIRO</span>
            </h1>

            <div className="mt-8">
                <img src="/carlinhos.jpg" alt="money" className="w-full max-w-xs rounded-3xl" />
            </div>

            <div className="flex items-center gap-2 mt-5">
                <p className="text-sm md:text-base">
                    Comunidade no TELEGRAM
                </p>
                <img src="/telegram.png" alt="Telegram" className="w-5 h-5" />
            </div>

            <button className="mt-5 bg-red-600 hover:bg-red-700 cursor-pointer font-bold py-4 px-6 rounded-2xl text-lg md:text-2xl w-full max-w-xs">
                <a target="_blank" href="https://t.me/carlinhosmaiatrader" rel="noopener noreferrer">
                    CLIQUE AQUI PARA ACESSAR
                </a>
            </button>

            <p className="text-lg md:text-xl mt-7 text-center max-w-[90%] md:max-w-[40%]">
                <span className="text-red-600">Clique no botão</span> acima e entre no grupo gratuito do
                <span className="text-red-600"> Telegram</span>
            </p>

            <div className="mt-7 flex flex-col gap-4">

                <div className="flex items-center gap-2">
                    <img src="/trophy.png" alt="Troféu" className="w-5 h-5" />
                    <p className="text-sm md:text-base">Operações 100% AO VIVO</p>
                </div>

                <div className="flex items-center gap-2">
                    <img src="/coin.png" alt="Moeda" className="w-5 h-5" />
                    <p className="text-sm md:text-base">Estratégias Validadas</p>
                </div>

                <div className="flex items-center gap-2">
                    <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
                    <p className="text-sm md:text-base">Suporte Dedicado</p>
                </div>

            </div>
        </div>
    );
}

export default SinglePage;
