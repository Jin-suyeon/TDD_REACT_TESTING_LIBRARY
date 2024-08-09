import { render, screen } from "@testing-library/react";
import MyPage from "../components/MyPage";

test("유저가 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage />);
  const txtEl = screen.getByText(/로그인을 해주세요/);
  const btnEl = screen.getByRole("button");

  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});

test("유저가 있으면 환영문구를 보여준다.", () => {
  render(<MyPage user={{ name: "수연" }} />);
  const txtEl = screen.getByText(/수연님 환영합니다/);

  expect(txtEl).toBeInTheDocument();
});
