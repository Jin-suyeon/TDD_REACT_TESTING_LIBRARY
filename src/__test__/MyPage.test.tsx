import { render, screen } from "@testing-library/react";
import MyPage from "../components/MyPage";

test("유저가 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage />);
  const txtEl = screen.getByAltText(/로그인을 해주세요/);
  const btnEl = screen.getByRole("button");

  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});
