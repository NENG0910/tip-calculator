import React, { cloneElement, Children, useRef, useState } from "react";

import {
  Icon,
  Radio,
  RadioGroup,
  Card,
  TextField,
  DataField,
} from "./components";

function App() {
  const [{ tipAmount, total }, setForm] = useState({ tipAmount: 0, total: 0 });

  function onChange(target) {
    const form = Object.fromEntries(new FormData(target).entries());
    const data = {
      bill: Number(form.bill),
      tips: form.tips === "custom" ? form.tips : Number(form.tips),
      person: Number(form.people),
      custom: Number(form.custom),
    };
    if (!data.person) {
      setForm({
        tipAmount: 0,
        total: 0,
      });
      return;
    }

    const tips = data.tips === "custom" ? data.custom : data.tips;

    const tip = data.bill * (tips / 100);
    const tipAmount = tip / data.person;
    const total = (data.bill + tip) / data.person;
    setForm({
      tipAmount,
      total,
    });
  }

  return (
    <div>
      <header className="my-12 flex justify-center">
        <h1 className="w-24 text-cyan-darkest">
          <Icon.Logo />
        </h1>
      </header>
      <main>
        <Card className={"rounded-3xl bg-white"}>
          <form
            className="flex flex-col gap-8"
            onChangeCapture={(event) => onChange(event.currentTarget)}
            onResetCapture={(event) =>
              requestAnimationFrame(() => onChange(event.target))
            }
          >
            {/*Bill */}
            <TextField
              id="bill"
              label="Bill"
              icon={<Icon.Dollar />}
              value="0"
              min="0"
            />
            {/*Slect Tip */}
            <RadioGroup id="tips" label="Slect Tip">
              <Radio label="5%" value="5" checked />
              <Radio label="10%" value="10" />
              <Radio label="15%" value="15" />
              <Radio label="25%" value="25" />
              <Radio label="50%" value="50" />
              <Radio label="custom" value="custom" custom />
            </RadioGroup>

            {/*Number of People */}
            <TextField
              id="people"
              label="Number of People"
              icon={<Icon.Person />}
              value="0"
              min="0"
            />
            {/*Present */}
            <Card className={" space-y-6 rounded-xl bg-cyan-darker"}>
              <div className="space-y-4">
                <DataField
                  title="Tip Amount"
                  note="/ person"
                  price={`${tipAmount}`}
                ></DataField>
                <DataField
                  title="Total"
                  note="/ person"
                  price={`${total}`}
                ></DataField>
              </div>

              <button
                className="w-full rounded bg-cyan-light py-2 text-xl font-bold text-cyan-text"
                type="reset"
              >
                RESET
              </button>
            </Card>
          </form>
        </Card>
      </main>
    </div>
  );
}

export default App;
