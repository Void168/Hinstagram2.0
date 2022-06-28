function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/123584179_1449709761900168_1445279572392526145_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Wo95pKXMSawAX-hm7Rk&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT9XUHxdPilbzyshjiWj853rHCcyA3pRI5snhY544OGypg&oe=62E1461F"
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">phuhuwnglee</h2>
        <h3 className="text-sm text-fray-400 overflow-x-scroll truncate">
          Chào mừng đến với Hinstagram 2.0
        </h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Đăng xuất</button>
    </div>
  )
}

export default MiniProfile
