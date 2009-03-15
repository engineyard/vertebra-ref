docdir = $(datadir)/doc/vertebra
hdocdir = $(docdir)/html

doc_DATA = src/README src/tex/vertebra.pdf 
hdoc_DATA = $(wildcard src/html/static/*) $(wildcard src/html/src/*.html)

if BUILD_TEX
  BUILD_TEX=src/tex
endif

if BUILD_HTML
  BUILD_HTML=src/html
endif

DIST_SUBDIRS=src/tex src/html
SUBDIRS=$(BUILD_TEX) $(BUILD_HTML)
