import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames/bind";

import UserInfor from "./UserInfor";
import Booking from "./Booking";
import Loading from "../../layout/component/Loading";

import { getUserInfor } from "../../slices/userSlice";
import styles from "./styles.module.scss";

const cn = classnames.bind(styles);

const User = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfor());
  }, []);

  if (!user) {
    return <Loading />;
  }

  const { hoTen, maLoaiNguoiDung } = user;

  return (
    <div className={styles.user}>
      <div className={styles.main}>
        <div className={styles.userInfor}>
          <p className={styles.image}></p>
          <p className={styles.name}>{hoTen}</p>
          <p
            className={cn("type", {
              quanTri: maLoaiNguoiDung === "GV",
            })}
          >
            {/* {loaiNguoiDung.tenLoai} */}
          </p>
          <div className={styles.bookingInfor}>
            <p>
              Amount of ticket booking:{" "}
              <strong className={styles.amount}>8</strong>
            </p>
          </div>
        </div>

        <div className={styles.userDetails}>
          <div className={styles.persionalInfor}>
            <UserInfor user={user} />
          </div>

          <div className={styles.bookingHistory}>
            <Booking user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
