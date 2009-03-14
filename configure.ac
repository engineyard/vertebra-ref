# -*- Autoconf -*-
AC_PREREQ(2.61)
AC_INIT(vertebra-doc, 0.4.0)
AM_INIT_AUTOMAKE([-Wall -Werror foreign])
AC_CONFIG_SRCDIR([src/tex/vertebra.tex])

AC_DEFUN([WITH_PROGRAM],
         [AC_ARG_VAR([$1], m4_default([$3], [The path to the $2 program]))
          AC_PATH_PROG([$1], [$2])
          if test "$$1" = ""; then AC_MSG_FAILURE(cannot find $2, [1]); fi])

WITH_PROGRAM(DOT, dot)
WITH_PROGRAM(MAKEINDEX, makeindex)
WITH_PROGRAM(NEATO, neato)
WITH_PROGRAM(PDFLATEX, pdflatex)
WITH_PROGRAM(TWOPI, twopi)
WITH_PROGRAM(PS2PDF, ps2pdf)

AM_PATH_PYTHON([2.5])

AM_CONDITIONAL([BUILD_TEX], [test "x$PDFLATEX" != x])
AM_CONDITIONAL([BUILD_HTML], [test "$PYTHON" != :])

# Output
AC_CONFIG_FILES([Makefile src/tex/Makefile src/html/Makefile])
AC_OUTPUT
