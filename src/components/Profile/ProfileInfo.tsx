import Image from 'next/image';

const  ProfileInfo = () => {
    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full z-20">
          <div className="container flex items-start gap-4">
            <div className="rounded-full overflow-hidden border-4 h-20 w-20 md:h-40 md:w-40">
              <Image
                className="h-full w-full"
                src="https://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpg?t=st=1730961763~exp=1730965363~hmac=9a977c3ed6c5741adfcfc9dd34ca523f217f59e8efaee7a7b77a7ef1307eb2bc&w=740"
                alt="Profile Pic"
                width={150}
                height={150}
              />
            </div>
            <div>
              <p className="mb-2 md:mb-5 font-semibold">Primly Member</p>
              <h3 className="text-lg md:text-5xl font-bold mb-2 md:mb-5 text-wrap">
                Reapzz
              </h3>
              <p className="font-semibold">Joined 01/06/2018</p>
              <p className='font-semibold'>Game ID:</p>
            </div>
          </div>
        </div>
    );
};

export default ProfileInfo;