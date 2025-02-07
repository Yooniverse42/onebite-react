function Header() {
  const todayIs = new Date().toDateString();

  return (
    <div>
      <h2>오늘은</h2>

      <h1>{todayIs}</h1>
    </div>
  );
}

export default Header;
