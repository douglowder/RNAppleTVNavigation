patch -p0 -N --dry-run --silent < react-podspec.patch 2>/dev/null
#If the patch has not been applied then the $? which is the exit status 
#for last command would have a success status code = 0
if [ $? -eq 0 ];
then
    #apply the patch
    patch -p0 -N < react-podspec.patch
fi
