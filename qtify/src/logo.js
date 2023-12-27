import logopng from "./assets/logo.svg";
export default function Logo() {
  return (
    <>
      <img
        src={logopng}
        alt="logo"
        style={{
          margin: "20px 2rem",
        }}
      />
    </>
  );
}
