import os, sys


def production():
    detect_node_modules = os.path.exists('node_modules')
    if detect_node_modules != True:
        try:
            yarn_or_npm = int(input("you want to use\n1.yarn\nor\n2.npm\n: "))
            if yarn_or_npm == 1:
                os.system("yarn")
                yes_or_not = input("you want to run it right away ?[Y/n]: ").upper()
                if yes_or_not == "Y":
                    port_choose = input("(optional)\nyou are not required to fill this, the default port is 3000\nyou want to use which port: ")
                    if len(port_choose) == 0:
                        port_choose = 3000
                        try:
                            return os.system("yarn build && yarn start -p "+str(port_choose))
                        except KeyboardInterrupt:
                            print("Bye Bye ~")
                            return sys.exit()
                    try:
                        return os.system("yarn build && yarn start -p "+str(port_choose))
                    except KeyboardInterrupt:
                        print("Bye Bye ~")
                        return sys.exit()
                elif yes_or_not == "N":
                    print("it's ok you can run it whenever you want\n")
                    return sys.exit()
            elif yarn_or_npm == 2:
                os.system("npm i")
                yes_or_not = input("you want to run it right away ?[Y/n]: ").upper()
                if yes_or_not == "Y":
                    port_choose = input("(optional)\nyou are not required to fill this, the default port is 3000\nyou want to use which port: ")
                    if len(port_choose) == 0:
                        port_choose = 3000
                        try:
                            return os.system("npm run build && npm run start -p "+str(port_choose))
                        except KeyboardInterrupt:
                            print("Bye Bye ~")
                            return sys.exit()
                    try:
                        return os.system("npm run build && npm run start -p "+str(port_choose))
                    except KeyboardInterrupt:
                        print("Bye Bye ~")
                        return sys.exit()
                elif yes_or_not == "N":
                    print("it's ok you can run it whenever you want\n")
                    return sys.exit()
            else:
                sys.exit()
        except KeyboardInterrupt:
            print("the option is only 1 or 2")
    else:
        detect_use_npm = os.path.exists('package-lock.json')
        detect_use_yarn = os.path.exists('yarn.lock')
        if detect_use_npm != True:
            port_choose = input("(optional)\nyou are not required to fill this, the default port is 3000\nyou want to use which port: ")
            if len(port_choose) == 0:
                port_choose = 3000
                try:
                    return os.system("yarn dev -p "+ str(port_choose))
                except KeyboardInterrupt:
                    print("Bye Bye ~")
                    return sys.exit()
            try:
                return os.system("yarn dev -p "+ str(port_choose))
            except KeyboardInterrupt:
                print("Bye Bye ~")
                return sys.exit()
        if detect_use_yarn != True:
            port_choose = input("(optional)\nyou are not required to fill this, the default port is 3000\nyou want to use which port: ")
            if len(port_choose) == 0:
                port_choose = 3000
                try:
                    return os.system("npm run dev -p "+ str(port_choose))
                except KeyboardInterrupt:
                    print("Bye Bye ~")
                    return sys.exit()
            try:
                return os.system("npm run dev -p "+ str(port_choose))
            except KeyboardInterrupt:
                print("Bye Bye ~")
                return sys.exit()


def development():
    detect_node_modules = os.path.exists('node_modules')
    if detect_node_modules != True:
        try:
            yarn_or_npm = int(input("you want to use\n1.yarn\nor\n2.npm\n: "))
            if yarn_or_npm == 1:
                os.system("yarn")
                yes_or_not = input("you want to run it right away ?[Y/n]: ").upper()
                if yes_or_not == "Y":
                    port_choose = input("(optional)\nyou are not required to fill this, the default port is 3000\nyou want to use which port: ")
                    if len(port_choose) == 0:
                        port_choose = 3000
                        try:
                            return os.system("yarn dev -p "+str(port_choose))
                        except KeyboardInterrupt:
                            print("Bye Bye ~")
                            return sys.exit()
                    try:
                        return os.system("yarn dev -p "+str(port_choose))
                    except KeyboardInterrupt:
                        print("Bye Bye ~")
                        return sys.exit()
                elif yes_or_not == "N":
                    print("it's ok you can run it whenever you want\n")
                    return sys.exit()
            elif yarn_or_npm == 2:
                os.system("npm i")
                yes_or_not = input("you want to run it right away ?[Y/n]: ").upper()
                if yes_or_not == "Y":
                    port_choose = input("(optional)\nyou are not required to fill this, the default port is 3000\nyou want to use which port: ")
                    if len(port_choose) == 0:
                        port_choose = 3000
                        try:
                            return os.system("yarn dev -p "+str(port_choose))
                        except KeyboardInterrupt:
                            print("Bye Bye ~")
                            return sys.exit()
                elif yes_or_not == "N":
                    print("it's ok you can run it whenever you want\n")
                    return sys.exit()
            else:
                sys.exit()
        except KeyboardInterrupt:
            print("the option is only 1 or 2")
    else:
        detect_use_npm = os.path.exists('package-lock.json')
        detect_use_yarn = os.path.exists('yarn.lock')
        if detect_use_npm != True:
            port_choose = input("(optional)\nyou are not required to fill this, the default port is 3000\nyou want to use which port: ")
            if len(port_choose) == 0:
                port_choose = 3000
                try:
                    return os.system("yarn dev -p "+ str(port_choose))
                except KeyboardInterrupt:
                    print("Bye Bye ~")
                    return sys.exit()
            try:
                return os.system("yarn dev -p "+ str(port_choose))
            except KeyboardInterrupt:
                print("Bye Bye ~")
                return sys.exit()
        if detect_use_yarn != True:
            port_choose = input("(optional)\nyou are not required to fill this, the default port is 3000\nyou want to use which port: ")
            if len(port_choose) == 0:
                port_choose = 3000
                try:
                    return os.system("npm run dev -p "+ str(port_choose))
                except KeyboardInterrupt:
                    print("Bye Bye ~")
                    return sys.exit()
            try:
                return os.system("npm run dev -p "+ str(port_choose))
            except KeyboardInterrupt:
                print("Bye Bye ~")
                return sys.exit()

def main():
    os.system("rm -rf .next out/")
    check = input("you want run into development or production ?\n1.prod\n2.dev\nchoose: ")
    if check == "1":
        production()
    elif check == "2":
        development()
    else:
        print("the option is only 1 or 2")
        sys.exit()



if __name__=='__main__':
    main()