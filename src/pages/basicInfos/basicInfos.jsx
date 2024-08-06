import InputComponent from "../../components/input/input"
import ButtonComponent from "../../components/button/button";
import SelectComponent from "../../components/select/select";
import { useState } from "react";
import StepsCounter from "../../components/stepsCounter/stepsCounter";
import { EncryptedLocalStorage } from "../../services/localStorage/localStorage.service";
import { ToastifyElement } from "../../components/toastify/ToastifyElement";

export default function BasicInfos() {
    const [selectsState, setSelectsState] = useState({
        privacity: false,
        updates: false
    })

    const [inputInfos, setInputInfos] = useState({
        name: "",
        phone: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputInfos({
            ...inputInfos,
            [name]: value
        })
    }

    const selectValue = (id, value) => {
        setSelectsState({
            ...selectsState,
            [id]: value
        })
    }

    const nextStep = async () => {
        let basicInfos = inputInfos;
        basicInfos.privacity = selectsState.privacity;
        basicInfos.updates = selectsState.updates;
        if (basicInfos.name === "") return ToastifyElement("error","O nome não pode estar vazio.");
        if (basicInfos.phone === "") return ToastifyElement("error", "O telefone não pode estar vazio.");
        if (basicInfos.phone.length < 15) return ToastifyElement("error", "O telefone está incompleto.");
        if (!basicInfos.privacity) return ToastifyElement("error", "Você precisa concordar com os Termos e Condições e a Política de Privacidade.");
        await EncryptedLocalStorage.put("basicInfos", );
        window.location.href = "/products";
    };

    const cancelPurchase = () => {
        window.location.href = "/";
    };


    return (
        <main className="first-mobile-align h-full">
            <main className="second-mobile-align flex flex-col h-full justify-between">
                <div className="flex flex-col gap-6">
                    <span className="text-md">Antes de fazer o seu pedido, precisamos que você nos informe alguns dados.</span>
                
                    <div className="flex flex-col gap-3">
                        <InputComponent name="name" label="Seu nome *" placeholder="Digite o seu nome" onInputChange={handleInputChange} />
                        <InputComponent name="phone" type="phone" label="Telefone" placeholder="Digite seu telefone" onInputChange={handleInputChange} />
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                        <SelectComponent label="Concordo com os Termos e Condições e a Política de Privacidade. *" id="privacity" value={selectsState.privacity} onChange={selectValue} />
                        <SelectComponent label="Quero receber atualizações via Whatsapp das próximas cantinas." id="updates" value={selectsState.updates} onChange={selectValue} />                        
                    </div>
                    <div className="flex flex-col gap-10">
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
                        <StepsCounter actualStep={2} totalSteps={5} stepsBackground={'#D9D9D9'} conclusedStepsBackground={'#7CBA3D'} />
                    </div>
                </div>
            </main>
        </main>
    )
}