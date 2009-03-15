.PHONY: all interactive_xml

vwf_files=$(wildcard src/*.vwf)
WORKFLOWS=$(patsubst %.vwf,%.html,$(vwf_files))

CLEANFILES=src/*.html

%.html: %.vwf
	$(PYTHON) util/xml_to_interactive_html $< $(<:%.vwf=%.cmt) $@

all-local: interactive_xml

interactive_xml: $(WORKFLOWS)

