import { Link, useLocation } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { supportedLanguages } from "~/localization/resource";

const constructTo = (pathName: string, language: string) => {
  const languageMatch = `/${language}`;
  // If the path already starts with the language, we remove it because we are switching to another language.
  if (pathName.startsWith(languageMatch)) {
    return pathName.replace(languageMatch, "");
  }
  // We return the path as is if it doesn't have a language.
  return pathName;
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const to = constructTo(location.pathname, i18n.language);

  return (
    <>
      {supportedLanguages.map((language) => (
        <Link
          key={language}
          to={`/${language}${to}`}
          onClick={() => i18n.changeLanguage(language)}
        >
          {language}
        </Link>
      ))}
    </>
  );
};

export { LanguageSwitcher };
