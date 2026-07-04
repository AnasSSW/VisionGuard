function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-8">

      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-slate-300"></div>

        <div>

          <p className="font-medium">Admin</p>

          <p className="text-sm text-gray-500">
            Administrator
          </p>

        </div>

      </div>

    </header>
  );
}

export default Navbar;