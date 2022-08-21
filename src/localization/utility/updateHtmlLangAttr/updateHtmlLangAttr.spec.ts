import { updateHtmlLangAttr } from "./updateHtmlLangAttr";
import { Lang } from "../../types";

describe("updateHtmlLangAttr", () => {
  it("should set provided lang into the document", () => {
    updateHtmlLangAttr(Lang.pl);
    expect(document.documentElement.getAttribute("lang")).toEqual(Lang.pl);
  });
});
