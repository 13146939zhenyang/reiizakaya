import React, { useState } from "react";
import { Button, Modal } from "antd";
import Image from "next/image";

const InsModal: React.FC = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <Button
        type="link"
        onClick={() => setModal2Open(true)}
        className="md:text-3xl h-auto text-white font-bold border-none bg-transparent hover:text-[#B11F24] drop-shadow-[0_0_10px] shadow-white transition-all ease-in-out duration-150"
      >
        Contact Us
      </Button>
      <Modal
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        closable={false}
        footer={() => null}
      >
        <div className="text-center font-bold md:text-3xl">{`CHECK OUT OUR INSTAGRAM!`}</div>
        <Image
          src={`https://izakaya-asset.s3.ap-southeast-2.amazonaws.com/rei-ins.webp`}
          alt="instagram"
          width={500}
          height={500}
          className="w-full mt-5"
          loading="lazy"
        />
      </Modal>
    </>
  );
};

export default InsModal;
