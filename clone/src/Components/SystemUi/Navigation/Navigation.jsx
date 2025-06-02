"use client";

import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import styles from "./navigation.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Navigation() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 200);
  };
  const handleMouseLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
    setIsHovered(false);
  };
  return (
    <>
      <div className="relative w-[100%] h-[100%]">
        <div
          className={
            isHovered
              ? `${styles.navigationListBox} ${styles.hoverActive}`
              : styles.navigationListBox
          }
        >
          <div className="max-w-fit h-[100%] flex flex-col relative justify-center items-center mt-5 ">
            <div className="absolute top-0">
              <Link href="/">
                <div className="p-1 cursor-pointer z-50 relative">
                  <div id="dark">
                    <Image
                      src="/icons/logoIconWhite.png"
                      width={35}
                      height={80}
                      alt="Ai Tools Bazaar Logo"
                      className={`img-fluid ${styles.logoIcon}`}
                    />
                  </div>
                </div>
              </Link>
              <Link href="/ai-coins"></Link>
            </div>
            <div
              className="max-w-fit h-[100%] flex flex-col items-center justify-between mt-24"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <Link href="/" passHref>
                  <div
                    className={
                      pathname === "/" || pathname === "/for-you"
                        ? `${styles.activeMenu} ${styles.navListBox}`
                        : styles.navListBox
                    }
                  >
                    <div className="relative p-1 z-50 cursor-pointer">
                      <div id="light">
                        <Image
                          src="/icons/homeActive.svg"
                          width={18}
                          height={18}
                          alt="home"
                        />
                      </div>
                    </div>
                    <div className={styles.navListName}>Home</div>
                  </div>
                </Link>
                <Link href="/submit-and-advertise" passHref>
                  <div
                    className={
                      pathname === `/submit-and-advertise`
                        ? `${styles.activeMenu} ${styles.navListBox}`
                        : styles.navListBox
                    }
                  >
                    <div className="p-1 z-50 relative cursor-pointer">
                      <div id="dark">
                        <div className={styles.iconActive}>
                          <Image
                            src="/icons/submitActive.svg"
                            width={24}
                            height={25}
                            alt="submit"
                          />
                        </div>
                        <div className={styles.icon}>
                          <Image
                            src="/icons/submit.svg"
                            width={24}
                            height={25}
                            alt="submit"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.navListName}>submit/advertise</div>
                  </div>
                </Link>
                <Link href={`/categories`} passHref>
                  <div
                    className={
                      pathname === `/categories` ||
                      pathname === `/tasks/[super]/[name]/[id]`
                        ? `${styles.activeMenu} ${styles.navListBox}`
                        : styles.navListBox
                    }
                  >
                    <div className={styles.leftPanelListIcon}>
                      {pathname === "/categories" ? (
                        <>
                          <div id="dark">
                            <Image
                              src="/icons/categoryActive.svg"
                              width={20}
                              height={20}
                              alt="category"
                            />
                          </div>
                          <div id="light">
                            <Image
                              src="/icons/categoryActive.svg"
                              width={20}
                              height={20}
                              alt="category"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div id="dark">
                            <div className={styles.iconActive}>
                              <Image
                                src="/icons/categoryActive.svg"
                                width={20}
                                height={20}
                                alt="category"
                              />
                            </div>
                            <div className={styles.icon}>
                              <Image
                                src="/icons/category.svg"
                                width={20}
                                height={20}
                                alt="category"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className={styles.navListName}>Categories</div>
                  </div>
                </Link>
                <Link href={`/ai-tutorials`} passHref>
                  <div
                    className={
                      pathname === `/ai-tutorials`
                        ? `${styles.activeMenu} ${styles.navListBox}`
                        : styles.navListBox
                    }
                  >
                    <div className={styles.leftPanelListIcon}>
                      {pathname === "/ai-tutorials" ? (
                        <>
                          <div id="dark">
                            <Image
                              src="/icons/aitutorialActive.svg"
                              width={20}
                              height={20}
                              alt="aitutorial"
                            />
                          </div>
                          <div id="light">
                            <Image
                              src="/icons/aitutorialActive.svg"
                              width={20}
                              height={20}
                              alt="aitutorial"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div id="dark">
                            <div className={styles.iconActive}>
                              <Image
                                src="/icons/aitutorialActive.svg"
                                width={20}
                                height={20}
                                alt="aitutorial"
                              />
                            </div>
                            <div className={styles.icon}>
                              <Image
                                src="/icons/aitutorial.svg"
                                width={20}
                                height={20}
                                alt="aitutorial"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className={styles.navListName}>AI tutorials</div>
                  </div>
                </Link>
                <Link href={`/ai-gadgets`} passHref>
                  <div
                    className={
                      pathname === `/ai-gadgets`
                        ? `${styles.activeMenu} ${styles.navListBox}`
                        : styles.navListBox
                    }
                  >
                    <div className={styles.leftPanelListIcon}>
                      {pathname === "/ai-gadgets" ? (
                        <>
                          <div id="dark">
                            <Image
                              src="/icons/aigadgetsActive.svg"
                              width={24}
                              height={18}
                              alt="aigadgets"
                            />
                          </div>
                          <div id="light">
                            <Image
                              src="/icons/aigadgetsActive.svg"
                              width={24}
                              height={18}
                              alt="aigadgets"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div id="dark">
                            <div className={styles.iconActive}>
                              <Image
                                src="/icons/aigadgetsActive.svg"
                                width={24}
                                height={18}
                                alt="aigadgets"
                              />
                            </div>

                            <div className={styles.icon}>
                              <Image
                                src="/icons/aigadgets.svg"
                                width={24}
                                height={18}
                                alt="aigadgets"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className={styles.navListName}>AI gadgets</div>
                  </div>
                </Link>
                <Link href={`/ai-events`} passHref>
                  <div
                    className={
                      pathname === `/ai-events`
                        ? `${styles.activeMenu} ${styles.navListBox}`
                        : styles.navListBox
                    }
                  >
                    <div className={styles.leftPanelListIcon}>
                      {pathname === "/ai-events" ? (
                        <>
                          <div id="dark">
                            <Image
                              src="/icons/aieventsActive.svg"
                              width={20}
                              height={18}
                              alt="aievents"
                            />
                          </div>
                          <div id="light">
                            <Image
                              src="/icons/aieventsActive.svg"
                              width={20}
                              height={18}
                              alt="aievents"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div id="dark">
                            <div className={styles.iconActive}>
                              <Image
                                src="/icons/aieventsActive.svg"
                                width={20}
                                height={18}
                                alt="aievents"
                              />
                            </div>

                            <div className={styles.icon}>
                              <Image
                                src="/icons/aievents.svg"
                                width={20}
                                height={18}
                                alt="aievents"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className={styles.navListName}>AI events</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
