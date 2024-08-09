import { render, screen } from "@testing-library/react";
import JoinButton from "../components/JoinButton";
import { act } from "react-dom/test-utils";

test("19세 이하면 버튼을 클릭할 수 없다. 안내문구는 빨간색이다.", () => {
  act(() => {
    render(<JoinButton age={18} />);
  });
  const btnEl = screen.getByRole("button");
  const txtEl = screen.getByRole("heading");

  expect(btnEl).toBeInTheDocument();
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeDisabled();
  expect(txtEl).toHaveStyle({ color: "red" });
});

test("성인이면 버튼을 클릭할 수 있다. 안내문구는 흰색이다.", () => {
  act(() => {
    render(<JoinButton age={20} />);
  });
  const btnEl = screen.getByRole("button");
  const txtEl = screen.getByRole("heading");

  expect(btnEl).toBeInTheDocument();
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeEnabled();
  expect(txtEl).toHaveStyle({ color: "white" });
});
