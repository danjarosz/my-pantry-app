import { renderHook } from "@testing-library/react";
import { useHelmet } from "./useHelmet";

describe("useHelmet", () => {
  it("should return nothing", () => {
    const { result } = renderHook(() => useHelmet("Provided title"));
    expect(result.current).toBe(undefined);
  });

  it("should change document title correctly", () => {
    renderHook(() => useHelmet("Provided title"));
    expect(document.title).toEqual("Provided title");
  });
});
