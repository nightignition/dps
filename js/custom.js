/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var items = $('.items_container');
	var slotAdd = $('.slot_add');
	var slot;
	var item = $('.item_add');

	initEquipment();

	/* 

	2. Equip Items

	*/

	function initEquipment()
	{
		slotAdd.each(function()
		{
			$(this).on('click', function()
			{
				slot = $(this).parent();
				items.removeClass('active');
				var type = $(this).data('type');
				var type_class = $('.' +type);
				type_class.addClass('active');
			});
		});

		item.each(function()
		{
			$(this).on('click', function()
			{
				var selected_link = $(this).siblings('a').attr('href');
				items.removeClass('active');
				slot.children('a').attr('href', selected_link);
				var new_link = '<a href="'+ selected_link +'"></a>';
				slot.addClass('active');
				slot.append(new_link);
				slot.load('index.html', slot + ' a');
			});
		});
	}

});