#!/bin/sh

exec stacktile  --per-tag-config \
                --primary-sublayout rows\
                --primary-ratio 0.5 \
                --remainder-sublayout grid \
                --inner-padding 4 \
                --outer-padding 4
