import React, { useState } from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import ResultDisplay from "../../components/ResultDisplay/ResultDisplay";

function TipCalculator() {
  const [valorConta, setValorConta] = useState("");
  const [percentualGorjeta, setPercentualGorjeta] = useState("");
  const [resultado, setResultado] = useState({ gorjeta: 0, total: 0 });

  const calcularGorjeta = () => {
      const valor = parseFloat(valorConta);
      const valorGorjeta = (valor * parseFloat(percentualGorjeta)) / 100;
      const total = valor + valorGorjeta;
      setResultado({ gorjeta: valorGorjeta.toFixed(2), total: total.toFixed(2) })
  }
  return (
      <>
          <h1>Calculadora de Gorjeta</h1>
          <InputField
              label="Valor da Conta:"
              value={valorConta}
              onChange={(e) => setValorConta(e.target.value)}
          />
          <InputField
              label="Porcentagem da Gorjeta (%)"
              value={percentualGorjeta}
              onChange={(e) => setPercentualGorjeta(e.target.value)}
          />
          <Button
              text="Calcular" onClick={calcularGorjeta}
          />
          
          {resultado && (<ResultDisplay gorjeta={resultado.gorjeta} total={resultado.total} />)}
      </>
  )
}
export default TipCalculator;