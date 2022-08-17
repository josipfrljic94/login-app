import React, { useEffect, useContext } from "react";
import { terms } from "./termsOfService";
import { spanishTerms } from "./termsOfSpanish";
import { AppContext } from "./context";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useTranslation } from "react-i18next";
import { langs } from "./data";
import { FormData } from "./lib/FormData";
//TODO MAKE SAME TING WITH FORM LABEL
const App = () => {
  const { t, i18n } = useTranslation();
  const {
    count,
    setCount,
    english,
    formValues,
    formErrors,
    isSubmit,
    handleSubmit,
    loading,
    setLoading,
    setLoadingStep,
    formLoader,
    setFormLoader,
  } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    let timeOut = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    setLoadingStep(true);
    let timeOut = setTimeout(() => {
      setLoadingStep(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [count]);

  useEffect(() => {
    setFormLoader(true);
    let timeOut = setTimeout(() => {
      setFormLoader(false);
    }, 7000);
    return () => clearTimeout(timeOut);
  }, [isSubmit]);

  return (
    <>
      <h1>{formValues.firstName}</h1>
      <h1>{formValues["lastName"]}</h1>
      <h1>{formValues["gender"]}</h1>
      <h1>{formValues["date"]}</h1>
      <h1>{formValues["phone"]}</h1>
      <div className="container-whole">
        {loading ? (
          <PropagateLoader
            className="loader"
            size={30}
            color={"#002D62"}
            loading={loading}
          />
        ) : (
          <>
            <div className="left-side-nav">
              <div className="image-container">
                <img
                  src="https://i.imgur.com/uR4AR4i.png"
                  alt="logo"
                  className="logo-image"
                />
              </div>
            </div>

            <div className="right-side-nav">
              {formLoader &&
                Object.keys(formErrors).length === 0 &&
                isSubmit && (
                  <div className="registration-complete">
                    {english ? "Registration Complete" : "Registro Completo"}
                  </div>
                )}

              <div className="language-container">
                {Object.values(langs).map((lng) => (
                  <button
                    type="submit"
                    onClick={() => i18n.changeLanguage(lng.abbr)}
                    key={lng.cl}
                    className={lng.cl}
                  ></button>
                ))}
              </div>

              <div className="app">
                <div className="progressBar-container">
                  <div className="progress-container">
                    <div
                      className={`current-progress ${
                        count >= 1 && "current-progress-step1"
                      } ${count >= 2 && "current-progress-step2"} ${
                        count >= 3 && "current-progress-step3"
                      } ${count >= 4 && "current-progress-step4"}`}
                    ></div>
                    <div
                      className={`circle-passive ${
                        count >= 1 && "circle-active"
                      }`}
                    >
                      1
                    </div>
                    <div
                      className={`circle-passive ${
                        count >= 2 && "circle-active"
                      }`}
                    >
                      2
                    </div>
                    <div
                      className={`circle-passive ${
                        count >= 3 && "circle-active"
                      }`}
                    >
                      3
                    </div>
                    <div
                      className={`circle-passive ${
                        count >= 4 && "circle-active"
                      }`}
                    >
                      4
                    </div>
                  </div>
                </div>
                <form className="col-15 form" onSubmit={handleSubmit}>
                  <FormData />
                </form>
                {count > 1 && count < 4 ? (
                  <button
                    className="btn btn-dark btn-prev"
                    type="button"
                    onClick={() => setCount(count - 1)}
                    disabled={count < 2}
                  >
                    {t("back")}
                  </button>
                ) : null}
                {count < 4 ? (
                  <button
                    className="btn btn-light btn-next"
                    type="button"
                    onClick={() => setCount(count + 1)}
                    disabled={count > 4}
                  >
                    {t("next")}
                  </button>
                ) : null}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
