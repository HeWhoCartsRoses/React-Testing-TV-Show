import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "../api/fetchShow";
import Episodes from "./Episodes";

jest.mock('../api/fetchShow');
test("renders dog images from API", async () => {
    mockFetchShow.mockResolvedValueOnce({})
    const episode = [{
        runtime: '50',
        id: 'crying inside',
        name: 'testing what you know is broken',
        season: 'last',
        episode: 'end me',
        summary: 'tear making the sheets wet at 1 in the morning',

    }]
    const { getByText } = render(<Episodes episodes={episode} />);
    expect(getByText).toInclude('crying inside')
});