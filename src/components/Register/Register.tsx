import { useEffect, useRef, useState } from "react";

import styles from "./Register.module.scss";

export const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalRef.current) return;

    const refSaved = modalRef.current;
    const handleKeyDown = (e: KeyboardEvent) => {
      e.stopPropagation();
    };
    const handleClick = (e: MouseEvent) => {
      e.stopPropagation();
    };
    refSaved.addEventListener("keydown", handleKeyDown);
    refSaved.addEventListener("click", handleClick);
    return () => {
      refSaved.removeEventListener("keydown", handleKeyDown);
      refSaved.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className={styles.Register} ref={modalRef}>
      <div>
        <div className={`${styles.row} ${styles.label}`}>이름</div>
        <div className={styles.row}>
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className={`${styles.row} ${styles.label}`}>
          비밀번호 (4자리 숫자)
        </div>
        <div className={styles.row}>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={e => {
              if (e.target.value.length > 4) return;
              if (isNaN(Number(e.target.value))) return;
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
