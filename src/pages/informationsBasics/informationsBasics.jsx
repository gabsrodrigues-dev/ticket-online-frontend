import InputComponent from "../../components/input/input"
import ButtonComponent from "../../components/button/button";
import SelectComponent from "../../components/select/select";
import { useState } from "react";

export default function InformationsBasics() {
    const [selectsState, setSelectsState] = useState({
        privacity: false,
        updates: false
    })

    const selectValue = (id, value) => {
        setSelectsState({
            ...selectsState,
            [id]: value
        })
    }

    const nextStep = () => {
        window.location.href = "/informationsBasics";
    };

    const cancelPurchase = () => {
        window.location.href = "/";
    };
    return (
        <main className="first-mobile-align h-full">
            <main className="second-mobile-align flex flex-col h-full justify-between">
                <div className="flex flex-col gap-6">
                    <span className="text-md">Antes de fazer o seu pedido, precisamos que você nos informe alguns dados</span>
                
                    <div className="flex flex-col gap-3">
                        <InputComponent label="Seu nome completo *" placeholder="Digite o seu nome"/>
                        <InputComponent label="Telefone" placeholder="Digite seu telefone"/>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                        <SelectComponent label="Concordo com os Termos e Condições e a Política de Privacidade. *" id="privacity" value={selectsState.privacity} onChange={selectValue} />
                        <SelectComponent label="Quero receber atualizações via Whatsapp das próximas cantinas." id="updates" value={selectsState.updates} onChange={selectValue} />                        
                    </div>
                    <div className="flex flex-col gap-3">
                        <ButtonComponent
                            text="Próximo"
                            textColor="#fff"
                            backgroundColor="#6D9773"
                            onClick={nextStep}
                        />
                        <ButtonComponent
                            text="Cancelar"
                            textColor="#ff5858"
                            borderColor="#ff5858"
                            backgroundColor="#FFF"
                            onClick={cancelPurchase}
                        />
                    </div>
                </div>
            </main>
        </main>
    )
}