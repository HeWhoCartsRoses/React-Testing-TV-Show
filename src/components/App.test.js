import React from "react";
import { render, t } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "../api/fetchShow";
import App from "../App";

jest.mock('../api/fetchShow');
test("render", async () => {
    mockFetchShow.mockResolvedValueOnce({})
    const { getByText } = render(<App />);
    expect(getByText).anything();
});