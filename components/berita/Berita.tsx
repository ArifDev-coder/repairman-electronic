import StatusToko from "./StatusToko";

export default function Berita() {
  return (
    <div className="w-full min-h-screen flex bg-white">
      <div className="max-w-7xl px-4 py-8 mx-auto">
        <StatusToko isOpen={true} />

      </div>
    </div>
  );
}

/* 
* Todo:
- [+] Menambahkan informasi status workshop
- [ ] Mempercantik Tampilan
- [ ] Membuat Backend untuk menyimpan data workshop
*/
