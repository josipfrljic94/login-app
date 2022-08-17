import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { DropDown } from "../components/DropDown/DropDown";
import { InputField } from "../components/InputField/InputField";
import { AppContext } from "../context";
import { getFormFields } from "./helper";
import { getFormOptionsData } from "../data";

/**
 * 
 * @returns 
 * ##FORM DATA HOC COMPONENT
 * ##### RETURN FORM FIELDS FOR SPECIFIC STEP
 */
export function FormData() {
  const { t } = useTranslation();
  const { count, formValues, handleChange } = useContext(AppContext);
  const stepData = getFormFields(count);
  const formOptionsData = getFormOptionsData(t);

  if (!stepData.length)
    return (
      <div>
        <h1>Step doesnt have form fields</h1>
      </div>
    );
  return (
    <div>
      {stepData.map((ff, key) =>
        ff.type === "select" ? (
          <DropDown
            key={key}
            t={t}
            keyValue={ff.fieldKey}
            label={t(ff.fieldKey)}
            dropdownData={formOptionsData[ff.fieldKey]}
            onChange={handleChange}
            value={formValues[ff.fieldKey]}
          />
        ) : (
          <InputField
            label={t(ff.fieldKey)}
            fieldType={ff.type}
            fieldKey={ff.fieldKey}
            value={formValues[ff.fieldKey]}
            error={""}
            onChange={handleChange}
            t={t}
            key={key}
          />
        )
      )}
    </div>
  );
}
